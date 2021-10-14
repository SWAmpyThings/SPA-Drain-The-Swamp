import { atom, selector } from "recoil";

const url = 'https://ljyi60vp3i.execute-api.us-east-1.amazonaws.com/Prod/activity?rapidRewardsNumber=701968280';

export const queryData = atom({
    key: 'queryData',
    default: selector({
        key: 'CurrentQuery',
        get: async () => {
            const response = await fetch(url);
            return await response.json();
        }
    })
});

export const queryDataState = selector({
    key: 'queryDataState',
    get: ({get}) => get(queryData)
});

export const activitiesQueryState = selector({
    key: 'activitiesQueryState',
    get: ({get}) => {
        return get(queryData).activities.reduce((acc, currentActivity) => {
            const {
                activityDate,
                approvedGreenIdeas,
                checkedBags,
                greenIdeas,
                isElectronicBoardingPass
            } = currentActivity;
            const date = new Date(activityDate);

            if (isElectronicBoardingPass) {
                acc.push({
                    activityDate: date,
                    activity: 'Paperless Boarding',
                    points: 1
                });
            } 
            if (approvedGreenIdeas) {
                acc.push({
                    activityDate: date,
                    activity: 'Approved Green Idea',
                    points: 100 * approvedGreenIdeas
                });
            } 
            if (checkedBags === 0) {
                acc.push({
                    activityDate: date,
                    activity: 'Flying Light',
                    points: 10
                });
            }
            if (greenIdeas) {
                acc.push({
                    activityDate: date,
                    activity: 'Green Idea',
                    points: 2
                })
            }

            return acc;
        }, []);
    }
});

export const greenPointsQueryState = selector({
    key: 'greenPointsQueryState',
    get: ({get}) => {
        return get(queryData).summary
    }
});