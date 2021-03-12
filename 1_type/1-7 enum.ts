{
    // Enum

    // javascript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;

    // 요일과 같은 연관성이 있어 연결하고 싶은
    const DAYS_ENUM = Object.freeze({"MONDAY" :0 ,"TUESDAY" : 1});

    // TS ENUM
    enum DAYS {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(DAYS.Tuesday);

}