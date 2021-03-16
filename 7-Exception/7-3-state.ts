{
  type SuccessState = {
    result: "success";
  };
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "Serverdown" | "timeout";
  };
  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      let success: SuccessState;
      return success;
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
    }
  }

  // try-catch를 할 때, 고려 해야하는 점이 있다면
  // 내가 catch를 했을 때 과연 쓸모가 있을까에 대한 고민을 하는 것이 중요하다.

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
