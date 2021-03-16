{
  printLogin({ state: "loading" }); // 👀 loading...
  printLogin({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLogin({ state: "fail", reason: "no network" }); // 😱 no network
}

type LoadingState = {
  state: "loading";
};

type SuccessState = {
  state: "success";
  response: {
    body: string;
  };
};

type FailState = {
  state: "fail";
  reason: string;
};

type ResourceLoadState = LoadingState | SuccessState | FailState;

function printLogin(state: ResourceLoadState) {
  switch (state.state) {
    case "loading":
      console.log("loading...");
      break;
    case "success":
      console.log(`${state.response.body}`);
      break;
    case "fail":
      console.log(`${state.reason}`);
    default:
      throw new Error(`unknown error ${state}`);
  }
}
