// Java : Exception
// JavaScript : Error

// Error(Exception) Handling : try -> catch -> finally
{
  function readFile(fileName: string): string {
    if (fileName === "not exist!!💩") {
      throw new Error(`file not exist! ${fileName}`);
    }
    return fileName;
  }

  function closeFile(fileName: string): void {
    //
  }

  const fileName = "file";
  // try catch문은 에러가 발생 할 수 있는 영역에만 사용을 한다.
  // 만약 try에서 에러가 난다면, 이전처럼 어플리케이션이 죽는 것이 아니라
  // catch -> next code로 이동하여 정상적으로 마무리 시켜준다.
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
  } finally {
    closeFile(fileName);
    console.log(`finally ${fileName}`);
  }
  // 반드시 실행 되어야 하는 파일이라면, finally 안에 넣어 줘야한다.
  // 왜 그러나면 catch에서 return;과 같이 어플을 종료 시키게 되면 실행이 안될 수 있기 때문이다.
  console.log("!!!");
}
