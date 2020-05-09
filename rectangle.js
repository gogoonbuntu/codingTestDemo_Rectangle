function solution(v) {
    let answer = new Array;
    let i, j;
    let first = new Array;
    let second = new Array;
    
    for(i=0; i<3; i++) {
        first.push(v[i][0]);
        second.push(v[i][1]);
    }
    console.log(first);
    first[0]==first[1] ? answer.push(first[2]) : 
        first[1]==first[2] ? answer.push(first[0]) : answer.push(first[1]);
    second[0]==second[1] ? answer.push(second[2]) :
        second[1]==second[2] ? answer.push(second[0]) : answer.push(second[1]);

    return answer;
}
