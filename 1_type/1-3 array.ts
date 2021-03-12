{
    //Array
    const fruits : string[] = ['1', '2'];
    
    // 불변성을 보장 하기 위한 readonly
    function printArray(fruits: readonly string[]) {
    }

    // Tuple [ 어떤 데이터가 있는지 찾기가 불편하여 사용을 추천 X]
    let student : [string, number];
    student = ['name', 123];
    const [name, age] = student;

}