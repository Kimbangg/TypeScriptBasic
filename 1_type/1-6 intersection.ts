{
    // intersection : and 
    type Student = {
        name: string,
        score: number;
    };

    type Worker = {
        employeeID : number,
        work: () => void;
    }

    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeID, person.work());
    }

    internWork ({
        name: 'donghyeon',
        score: 4,
        employeeID : 123,
        work: () => {},
    });
}