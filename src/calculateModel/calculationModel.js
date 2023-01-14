
import { Today } from '@mui/icons-material';
import { type } from '@testing-library/user-event/dist/type';
import data from '../details.json';
const users = ['prat051','rajesh_dai']
const e = Math.E;

function calculateCreditHistoryLengthScore(time)
{
    return 100/(1 + 4*e**(-time/3))
}

function calculateCreditUtilizationScore(credit_utilization_ratio){

    if (credit_utilization_ratio < 0.1)
    {
        return 100
    }
    
    else if (credit_utilization_ratio > 0.1 && credit_utilization_ratio <= 0.15) return 90;
      
    else if( credit_utilization_ratio > 0.15 && credit_utilization_ratio <=0.20) return 75;
       
    else if (credit_utilization_ratio > 0.2 && credit_utilization_ratio <=1)     return (1 - credit_utilization_ratio)*0.97**(credit_utilization_ratio*20);
     
}

function calculateCreditDiversificationScore(types)
{   
    
    return types * 9;
}

function calculateCreditHistoryScore(total_timely_payments, total_untimely_payments, no_of_defaults)
{
    let base_score = 50;
    let total_score = base_score + total_timely_payments*1 - total_untimely_payments*2 - no_of_defaults*20;
    total_score = total_score > 100? 100:total_score;
    total_score = total_score < 0 ? 0:total_score;
    return total_score

}
    

function calculateTotalCreditScore(phs,cus, chls, cds)
{

    // phs = payment history score
    // cds = credit diversification score
    // chs = credit history score
    // cus = credit utilization score
    let score = phs*0.37 + cus*0.31 + chls*0.16 + cds*0.15
    let total_credit_score = 300 + score*5.5
    return total_credit_score
}
    

function returnCreditRating(credit_score)
{
    if (credit_score >= 300 && credit_score < 580) return "Poor";
    else if( credit_score >= 580 && credit_score < 670) return 'Fair';
   
    else if (credit_score >=670 && credit_score <740) return 'Good';
    
    else if (credit_score >= 740 && credit_score < 800) return 'Very Good'
    
    else if (credit_score >= 800 && credit_score <= 850) return 'Excellent';
    

}

function returnCreditChangeNumber(lastScore,currentScore)
{
    return (currentScore - lastScore);
}
   
function returnpercentChange(lastScore,currentScore)
{
    return ((currentScore-lastScore)/lastScore) * 100;
}
   
function returnDataLocation(userID,found)
{

}

function returnLastFiveMonthData()
   

const validation = (userID)=> 
{   var found = false;  
    for (var i = 0; i <(data.Himalayan_Bank.registered_users).length; i++)
    {
        if(data.Himalayan_Bank.registered_users[i] === userID)
        {
            found = true;
        }
    }


    
    if (found)  
    {
        let userInfo = data.Himalayan_Bank;  
        let dataLocation;
        var currDate = new Date();
        var prevDate = new Date();
        prevDate.setMonth(currDate.getMonth() - 1);
        var previousMonth = prevDate.toLocaleDateString('en-US',{month:'long'});
        var month = currDate.toLocaleDateString('en-US',{month:'long'});

        for (var i = 0; i < (userInfo.user_details).length;i++)
        {
            if (userID === userInfo.user_details[i].name)
            {
                dataLocation = i;
                break;
            }
        }
        
        let length_of_credit_history = userInfo.user_details[dataLocation].length_of_credit_history_in_days/365;
        let credit_utilization_ratio = userInfo.user_details[dataLocation].credit_utilization_ratio;
        let timely_payments = userInfo.user_details[dataLocation].timely_payments;
        let overdue_payments = userInfo.user_details[dataLocation].overdue_payments;
        let credit_default_record = userInfo.user_details[dataLocation].credit_default_record;
        let credit_types = userInfo.user_details[dataLocation].types_of_credit;
        let credit_score_history = userInfo.user_details[dataLocation].credit_score_history;
        let last_month_score;
        let percent_change;
        let last_five_month_score = {};

        var fiveMonths = new Date();
        var tempMonth;
        
        for (var i = 0 ; i < 5 ;i++)
        {
            fiveMonths.setMonth(month.getMonth - i);
            tempMonth = fiveMonths.toLocaleDateString('en-US',{month:'long'});
            last_five_month_score[tempMonth] = credit_score_history[tempMonth];
        }
        
        console.log(last_five_month_score);
        
        let credit_history_length_score = calculateCreditHistoryLengthScore(length_of_credit_history);
        let credit_utilization_score = calculateCreditUtilizationScore(credit_utilization_ratio);
        let credit_diversification_score = calculateCreditDiversificationScore(credit_types);
        let credit_history_score = calculateCreditHistoryScore(timely_payments, overdue_payments, credit_default_record);
        let credit_score = Math.round(calculateTotalCreditScore(credit_history_score, credit_utilization_score, credit_history_length_score, credit_diversification_score));
        

        
        let credit_rating = returnCreditRating(credit_score);
        
        last_month_score = returnCreditChangeNumber(credit_score_history[previousMonth],credit_score);
        percent_change = returnpercentChange(credit_score_history[previousMonth],credit_score);
     


        
        
        let creditData = {
            score:credit_score,
            rating:credit_rating,
            prevscore:last_month_score,
            percentchange:parseFloat(percent_change.toPrecision(2)),
        }

        return creditData;

            
    }
    else 
    {
        return false;
    }
}



module.exports = {
    validation
}

