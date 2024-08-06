export enum LoadingState { // 36
  LOADED = "LOADED",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export interface Tweet { // 34
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export interface TweetsState { // 35
  items: Tweet[];
  loadingState: LoadingState; // 37
}


// 38 переходим в reducer.ts