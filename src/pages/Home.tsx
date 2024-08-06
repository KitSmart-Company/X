import React, { FC, ReactElement, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { FiSearch, FiSettings } from "../data/data";
import Avatar from "@mui/material/Avatar";
import Tweet from "../components/Tweet";
import SideMenu from "../components/SideMenu";
import AddTweetForm from "../components/AddTweetForm";

const Home: FC = (): ReactElement => {
  return (
    <section className="m-auto w-[1280px]">
      <Grid className="relative" container>
        <Grid className="h-[100%] sticky top-0" item xs>
          {/* 6 создаем SideMenu.tsx и передаем нашу меню */}
          <SideMenu />
        </Grid>
        <Grid item xs={6.5}>
          <Paper
            style={{
              background: "black",
              color: "white",
              border: "1px solid #2F3336",
              borderRadius: "0px",
              width: "40.8rem",
              borderBottom: "none",
              borderTop: "none",
              position: "sticky",
              top: "0",
            }}
            variant="outlined"
          >
            <div className="flex border border-[#2F3336] border-t-0 border-r-0 border-l-0 text-center items-center justify-center">
              <div className="hover:bg-[#181818] relative transition-all p-4 w-full">
                <a href="#" className="font-bold">
                  For you
                </a>
                <div className="w-1px h-[4px] rounded-full bg-[rgb(29,155,240)] w-[4.5rem] absolute bottom-0 left-[38%]"></div>
              </div>
              <div className="hover:bg-[#181818] text-[#71767B] font-[500] transition-all p-4 w-full">
                <a href="#">Following</a>
              </div>
            </div>
          </Paper>
          <Paper
            style={{
              background: "black",
              color: "white",
              border: "1px solid #2F3336",
              borderRadius: "0px",
              width: "40.8rem",
              borderTop: "none",
              borderBottom: "none",
            }}
            variant="outlined"
          >
            {/* 8 Создаем кaстомный компонент addTweetForm и передвесм нашу форму добавления твитов */}
            <AddTweetForm />
          </Paper>
          {/* 4 Создаем основной компонент Tweet и передаем туда наши твиты */}
          <Tweet
            text="Advance warning that this will be long, so for the basketball loonies :) It will be another war, another bloody series, I think."
            user={{
              fullname: "Maron Wilson",
              username: "@Maron1076160824",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            }}
          />
        </Grid>

        <Grid className="sticky pl-4 top-0 h-[100%]" item xs={3}>
          <div className="ml-[-1rem] flex items-center mt-[0.4rem] p-3 bg-[#202327] rounded-full w-[115%]">
            <FiSearch size={18} className="text-[#6B6B6C]" />
            <input
              className="ml-[20px] placeholder:text-[16px] placeholder:text-[#6B6B6C] bg-[#202327] outline-none w-[80%]"
              type="text"
              placeholder="Поиск"
            />
          </div>
          <div className="ml-[-1rem] mt-4 flex flex-col w-[115%] rounded-2xl border border-[#2F3336]">
            <h3 className="font-bold p-3 text-[20px]">За кем сделовать</h3>
            <button className="hover:bg-[#080808] active:bg-[#0D0F10] transition-all">
              <div className="flex justify-between items-center p-2">
                <div className="flex gap-1">
                  <Avatar
                    alt="Cindy Baker"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hgIb-7vSV07Gt0q3C_zar9KW80q62nDov0Cx6M-lZQ&s"
                  />
                  <div className="flex flex-col">
                    <span className="text-left font-bold">NATA</span>
                    <span className="text-left text-[#71767B]">@NATA</span>
                  </div>
                </div>
                <button className="font-bold p-1.5 px-4 mr-2 bg-[#EFF3F4] transition-all hover:bg-[#eff3f4fa] active:bg-[#eff3f4da] text-[14px] text-black rounded-full">
                  Follow
                </button>
              </div>
            </button>
            <button className="hover:bg-[#080808] active:bg-[#0D0F10] transition-all">
              <div className="flex items-center justify-between gap-1 p-2">
                <div className="flex gap-1">
                  <Avatar
                    alt="Cindy Baker"
                    src="https://asset.brandfetch.io/id2g3lee9x/idXX_e5k_s.jpeg"
                  />
                  <div className="flex flex-col">
                    <span className="text-left font-bold">SpiceX</span>
                    <span className="text-left text-[#71767B]">@SpiceX</span>
                  </div>
                </div>
                <button className="font-bold p-1.5 px-4 mr-2 bg-[#EFF3F4] transition-all hover:bg-[#eff3f4fa] active:bg-[#eff3f4da] text-[14px] text-black rounded-full">
                Follow
                </button>
              </div>
            </button>
            <button className="hover:bg-[#080808] active:bg-[#0D0F10] transition-all">
              <div className="flex items-center justify-between gap-1 p-2">
                <div className="flex gap-1">
                  <Avatar
                    alt="Cindy Baker"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2NfBVbUqVSxTEp68r251Xn5uK___XmY5IgHdQgqirQ&s"
                  />
                  <div className="flex flex-col">
                    <span className="text-left font-bold">Google</span>
                    <span className="text-left text-[#71767B]">@Google</span>
                  </div>
                </div>
                <button className="font-bold p-1.5 px-4 mr-2 bg-[#EFF3F4] transition-all hover:bg-[#eff3f4fa] active:bg-[#eff3f4da] text-[14px] text-black rounded-full">
                Follow
                </button>
              </div>
            </button>
            <button className="hover:bg-[#080808] text-left active:bg-[#0D0F10] text-[#1D9BF0] rounded-b-2xl p-3">
              Show more
            </button>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Home;
