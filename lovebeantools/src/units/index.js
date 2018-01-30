//@flow




//增长率计算方法
export function computeGrowthRate(thisValue?: ?number, lastValue?: ?number): ?number {
     if (thisValue === null || thisValue === undefined) return null;
     if (lastValue === null || lastValue === undefined) return null;
     return (thisValue - lastValue) / lastValue;
 }


//已知扣点和扣除后的金额，计算原金额
export function computeDeductPointOriginAmount(actualAmount: number, deductPoint/*单位：%*/: number): number {
    return actualAmount / (1 - deductPoint/100);
}

 //扣点省钱计算公式
export function computeDeductPointSaveAmout(rulePoint: number, details: [/*实际金额*/number,/*折扣点*/number][]): number {
    let totalActualAmount = 0;
    let totalOriginAmount = 0;
    details.forEach((value: [/*实际金额*/number,/*折扣点*/number], index: number) => {
        totalActualAmount += computeDeductPointOriginAmount(value[0],value[1]);
        totalOriginAmount += computeDeductPointOriginAmount(value[0],rulePoint);
    });
    return totalOriginAmount - totalActualAmount;
}
