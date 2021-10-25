import { atom, selector } from 'recoil';

const url = 'https://ljyi60vp3i.execute-api.us-east-1.amazonaws.com/Prod/summary';
const conversionFactors = {
    averageWeightSavingsNoCheckedBags: 10,
    co2PerJetFuelGallon: 21,
    fuelSavingsPerFlightPoundSavedAnnually: 15428,
    passengersUsingPaperPasses: 0.33,
    passengersPerFlight: 120,
    passengerBehaviorChangeRatio: 0.05,
    yearElapsed: 0.8
}

export const summaryDataState = atom({
    key: 'summaryDataState',
    default: selector({
        key: 'summaryQuery',
        get: async () => {
            const response = await fetch(url);
            const json = await response.json();

            return json;
        }
    })
});

export const convertedSummaryData = selector({
    key: 'convertedSummaryData',
    get: ({get}) => {
        const summaryData = get(summaryDataState);
        const co2Saved =
            summaryData.noCheckedBagRewards / 3 *
            conversionFactors.passengerBehaviorChangeRatio *
            conversionFactors.averageWeightSavingsNoCheckedBags *
            conversionFactors.fuelSavingsPerFlightPoundSavedAnnually *
            conversionFactors.co2PerJetFuelGallon *
            conversionFactors.yearElapsed;
        const greenIdeas =
            Math.floor(
                Number(365 *
                conversionFactors.yearElapsed *
                summaryData.greenIdeasRewards)
            );
        const treesSaved = 1500

        return {
            co2Saved,
            greenIdeas,
            treesSaved
        };
    }
});
