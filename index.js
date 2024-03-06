const data = require("./data.json");

const feedbacks = data[0].applicantData.feedbacks || [];
const feedbackMap = new Map();
const obj = {name: "shahid"};
for(let i=0; i<feedbacks.length; i++){
	const feedback = feedbacks[i];
	if(feedback.ratedBy){
		if(!feedbackMap.has(feedback.ratedBy, [])){
			feedbackMap.set(feedback.ratedBy, []);
		}
		feedbackMap.get(feedback.ratedBy).push({...feedback, obj});
	}
}

const feedbackRating = (feedbacks)=>{
	let overall = 0;
	feedbacks.forEach((feedbackArray)=>{
		feedbackArray.forEach((feedback)=>{
			//console.log(feedback)
			if(feedback.feedbackRating && feedback.feedbackRating.length > 0){
				const feedbackSum = feedback.feedbackRating.reduce((acc, curr)=>acc+curr.value,0);
				overall += feedbackSum;
			}
		});
	});
	return overall;
}

console.log("feedback rating overall : ",feedbackRating(feedbackMap));

const getFeedback = (feedbackMap)=>{
	const feedback_data = [];
	feedbackMap.forEach((feedbacks)=>{
		feedbacks.forEach((el)=>{
			if(el && el.feedbackRating.length > 0){
				el.feedbackRating.forEach((el)=>{
					feedback_data.push(el.key);
				});
			}
		});
	});
	return feedback_data;
}


const feedbackArray = getFeedback(feedbackMap);
const feedbackSet = new Set(feedbackArray);

const getUniqueFeedback = (feedbacks) => {
    const uniqueFeedbackSet = new Set(feedbacks);
    return Array.from(uniqueFeedbackSet);
};

const uniqueFeedback = getUniqueFeedback(feedbackSet);
console.log(uniqueFeedback);

/*
const getUniqueFeedback = (feedbacks)=> {
	const feedback_data = [];
	feedbacks.forEach((el)=>{
		feedback_data.push(el);
	});
	return feedback_data;
	
}
const unique_feedback = getUniqueFeedback(feedbackSet);
console.log(unique_feedback)
*/



/**
let temp = 0;
const feedbackRating = feedbackMap.forEach((totalOverall, v)=>{
	if(k && k.length > 0){
		const overall = k.map((el)=> {
			if(el.feedbackRating && el.feedbackRating.length > 0){
				return el.feedbackRating.reduce((acc, curr)=> acc+curr.value,0);
			}
		});
	}
	return overall;
});
**/
//console.log('feeding rating overall : ',feedbackRating);
