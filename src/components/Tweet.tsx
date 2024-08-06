import React, { FC, ReactElement } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import {
  TbMessageCircle,
  LuRepeat2,
  RiShare2Line,
  MdFavoriteBorder,
} from "../data/data";
import { hover } from "@testing-library/user-event/dist/hover";

interface TweetProps {
  // Указываем строгую типизацию.
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

const Tweet: FC<TweetProps> = ({ text, user }: TweetProps): ReactElement => {
  return (
    <div className="bg-black hover:bg-[#080808] transition-all text-white border border-[#2F3336] w-[40.8rem] ">
      <Grid className="p-3" container spacing={3}>
        <Grid item xs={1}>
          <Avatar
            alt={`Аватарка пользователя ${user.fullname}`}
            src={user.avatarUrl}
          />
        </Grid>
        <Grid item xs={10}>
          <a className="font-bold text-[16px] cursor-pointer transition-all hover:underline">
            {user.fullname}
          </a>
          <span className="text-[#71767B] cursor-pointer px-2 text-[15px] no-underline font-[400]">
            {user.username}.<span className="px-2">12 часов</span>
          </span>
          <p className="text-[#E2E4E4]">{text}</p>
          <img className=" rounded-2xl mt-2" src="https://plus-one.ru/files/image_2020/08/elon-musk-1-41.jpg" alt="" />
          <div className="flex relative left-[-10px] justify-between mt-3">
            <div className="flex justify-center items-center">
              <button>
                <TbMessageCircle className="hover:bg-[#031018] w-[32px] h-[32px] p-1.5 items-center rounded-full text-[#71767B] transition-all hover:text-[#1A8BD8] text-[20px]" />
              </button>
              <span className="text-[#6B7074] text-[12px]">134</span>
            </div>
            <button>
              <LuRepeat2 className="text-[#71767B] w-[32px] h-[32px] rounded-full p-1.5 hover:bg-[#071A14] transition-all hover:text-[#00B075] text-[20px]" />
            </button>
            <button>
              <MdFavoriteBorder className="hover:bg-[#200914] w-[32px] h-[32px] p-1.5 items-center rounded-full text-[#71767B] transition-all hover:text-[#D3156D] text-[20px]" />
            </button>
            <button>
              <RiShare2Line className="hover:bg-[#031018] w-[32px] h-[32px] p-1.5 items-center rounded-full text-[#71767B] transition-all hover:text-[#1A8BD8] text-[20px]" />
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tweet;

// 5 Переходим в компонент Home.tsx
