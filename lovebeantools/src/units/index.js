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
    let totalOriginAmount = 0;
    let totalActualAmount = 0;
    details.forEach((value: [/*实际金额*/number,/*折扣点*/number], index: number) => {
        totalOriginAmount += computeDeductPointOriginAmount(value[0],value[1]);
        totalActualAmount += value[0];
    });
    return totalActualAmount - totalOriginAmount *  ( (100 - rulePoint) / 100);
}

//将字符串转换为数字，可以自动过滤逗号
export  function transformTextToNumber(text: string): ?number {
    let pureText = text.replace(/,/g,'');
    let number = Number(pureText);
    if (isNaN(number)) return null;
    return number;
}

//将数字转换为大写金额方便观看
export function digitUppercase (n: number) {
    var fraction = ['角', '分'];
    var digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};

//将数字转换为大写金额方便观看
export function digitAddUnit (n: number) {
    var unit = ['','万','亿','万亿','万万亿'];
    var head = n < 0 ? '-' : '';
    n = Math.abs(n);
    let str = String(n);
    let arr = str.split('.');
    let foot = null;
    if (arr.length == 2) {
      foot = arr[1];
    }
    let b: string = arr[0];
    let body = ''
    for (var i = 0; i < b.length; i++) {
        if (i % 4 == 0) {
           let index = Math.floor(i/4);
           if (index < 5) {
              body = unit[index].concat(body);
           }
        }
        let p: string = b.substr(b.length - 1 - i, 1);
        body = p.concat(body);
    }
    return head + body + (foot ? ('.'+foot) : '')
};