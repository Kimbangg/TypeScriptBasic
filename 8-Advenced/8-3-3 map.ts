{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for .. in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; // for .. in
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "찰리의 초콜릿 공장",
  };

  type ReadonlyVideo = ReadOnly<Video>;
  const ReadVideo: ReadonlyVideo = {
    title: "hi",
    author: "ellie",
    description: "funny",
  };

  //   type VideoOptional = {
  //     title?: string;
  //     author?: string;
  //     description?: string;
  //   };

  //   type VideoReadOnly = {
  //     readonly title: string;
  //     readonly author: string;
  //     readonly description: string;
  //   };
}
