{
    // { } 중괄호를 열어줌으로써, 로컬에서만 사용 돠도록 한다.

    // let => 선언 이후에도 변경이 가능하다. (es6에서 나옴)
    let name = 'hello';
    name = 'hi';
    // 타입스크립트 타입 

    // number 소수, 양수, 음수 모두 가능
    const num : number=0.1; 
    // String
    const str:string= 'hello';
    //boolean
    const boal:boolean = true;

    // undefined [값이 있는지 없는지 결정 되지 않음. ]
    let age:number | undefined; 
    age = undefined;
    age = 1;

    function find():number | undefined{
        return undefined;
    }
    // null [ 무조건 비어있는 것을 결정 되어 있음.]
    let person: string | null;
    person = null;

    // unknown 가능하면 쓰지 않는 것이 좋음.
    let notSure:unknown = 0;
    notSure ='he';
    notSure = true;

    // any 가능하면 이 친구도 사용 ㄴ.ㄴ
    let anything : any = 0;
    anything = 'hello';

    // void 는 생략이 가능하다. => style guide에 맞게 사용하는 것이 좋다.
    function print(): void {
        console.log('hello');
        return ;
    }
    
    let unusable: void = undefined; 

    // object [ 원시 타입을 제외한 모든 패러미터 전달이 가능하다.]
    // 쓰지 않는 것이 좋다. 어떤 타입의 오브젝트 인지 명시 해줄 것!
    let obj: object;
    function acceptSomeObject(obj: object) {
        
    }
    acceptSomeObject({name: 'donghyeon'});
    acceptSomeObject({animal: 'dog'});
}