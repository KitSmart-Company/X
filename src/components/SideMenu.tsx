import React, { FC, ReactElement, useState } from "react";
import ModalBlock from "./ModalBlock";
import {
  HomeRoundedIcon,
  NotificationsNoneIcon,
  SearchOutlinedIcon,
  EmailOutlinedIcon,
  ListAltOutlinedIcon,
  BookmarkBorderOutlinedIcon,
  PeopleAltOutlinedIcon,
  XIcon,
  PermIdentityIcon,
  MoreHorizIcon,
} from "../data/data";
import AddTweetForm from "./AddTweetForm";

const SideMenu: FC = (): ReactElement => {
  // 7 Переходим обратно в Home.tsx

  const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false); //21

  const handleClickOpenAddTweet = () => {
    //22
    setVisibleAddTweet(true);
  };

  const onCloseAddTweet = () => {
    //23
    setVisibleAddTweet(false);
  };
  return (
    <>
      <div className="hover:bg-[#181818] cursor-pointer w-[50px] h-[50px] flex justify-center items-center rounded-full mb-[.5rem]">
        <XIcon
          style={{
            fontSize: "2rem",
            color: "#E7E9EA",
          }}
        />
      </div>
      <ul className="list-none m-0">
        <li className="flex cursor-pointer transition-all hover:bg-[#181818] p-2 h-[3rem] w-[9rem] rounded-full mb-3 items-center">
          <HomeRoundedIcon style={{ fontSize: "1.9rem", color: "#E7E9EA" }} />
          <h6 className="text-[20px] font-bold ml-[15px]">Home</h6>
        </li>
        <li className="flex mb-3 rounded-full h-[3rem] w-[9.5rem] cursor-pointer transition-all hover:bg-[#181818] p-2 items-center">
          <SearchOutlinedIcon
            style={{ fontSize: "1.9rem", color: "#E7E9EA" }}
          />
          <h6 className="text-[20px] text-[#E1E3E4] ml-[15px]">Explore</h6>
        </li>
        <li className="flex mb-3 rounded-full h-[3rem] w-[11.5rem] cursor-pointer transition-all hover:bg-[#181818] p-2 items-center">
          <NotificationsNoneIcon
            style={{ fontSize: "1.9rem", color: "#E7E9EA" }}
          />
          <h6 className="text-[20px] text-[#E1E3E4] ml-[15px]">Notification</h6>
        </li>
        <li className="flex mb-3 rounded-full h-[3rem] w-[10.5rem] cursor-pointer transition-all hover:bg-[#181818] p-2 items-center">
          <EmailOutlinedIcon style={{ fontSize: "1.9rem", color: "#E7E9EA" }} />
          <h6 className="text-[20px] text-[#E1E3E4] ml-[15px]">Messages</h6>
        </li>
        <li className="flex mb-3 rounded-full w-[7.5rem] h-[3rem] cursor-pointer transition-all hover:bg-[#181818] p-2 items-center">
          <ListAltOutlinedIcon
            style={{ fontSize: "1.9rem", color: "#E7E9EA" }}
          />
          <h6 className="text-[20px] text-[#E1E3E4] ml-[15px]">Lists</h6>
        </li>
        <li className="flex mb-3 rounded-full h-[3rem] w-[11rem] cursor-pointer transition-all hover:bg-[#181818] p-2 items-center">
          <BookmarkBorderOutlinedIcon
            style={{ fontSize: "1.9rem", color: "#E7E9EA" }}
          />
          <h6 className="text-[20px] text-[#E1E3E4] ml-[15px]">Bookmarks</h6>
        </li>
        <li className="flex mb-3 rounded-full h-[3rem] w-[12.5rem] cursor-pointer transition-all hover:bg-[#181818] p-2 items-center">
          <PeopleAltOutlinedIcon
            style={{ fontSize: "1.9rem", color: "#E7E9EA" }}
          />
          <h6 className="text-[20px] text-[#E1E3E4] ml-[15px]">Communities</h6>
        </li>
        <li className="flex cursor-pointer transition-all hover:bg-[#181818] p-2 h-[3rem] w-[10rem] rounded-full mb-3 items-center">
          <XIcon style={{ fontSize: "1.9rem", color: "#E7E9EA" }} />
          <h6 className="text-[20px] text-[#E1E3E4] ml-[15px]">Premium</h6>
        </li>
        <li className="flex mb-3 rounded-full h-[3rem] w-[9rem] cursor-pointer transition-all hover:bg-[#181818] p-2 items-center">
          <PermIdentityIcon style={{ fontSize: "1.9rem", color: "#E7E9EA" }} />
          <h6 className="text-[20px] text-[#E1E3E4] ml-[15px]">Profile</h6>
        </li>
        <li className="flex mb-3 rounded-full h-[3rem] w-[8.5rem] cursor-pointer transition-all hover:bg-[#181818] p-2 items-center">
          <MoreHorizIcon style={{ fontSize: "1.9rem", color: "#E7E9EA" }} />
          <h6 className="text-[20px] text-[#E1E3E4] ml-[15px]">More</h6>
        </li>
        <li className="mt-6">
          <button
            onClick={handleClickOpenAddTweet}
            className="bg-[#1D9BF0] transition-all hover:bg-[#1d9cf0f3] text-[18px] py-[13px] font-bold px-11 w-[90%] rounded-full"
          >
            Post
          </button>
          <ModalBlock // 24
            onClose={onCloseAddTweet}
            visible={visibleAddTweet}
          >
            {/* 25 передаем компонент AddTweetForm */}
            <div className="w-[550px] mt-5 p-2">
              <AddTweetForm />
            </div>
          </ModalBlock>
          {/* 26 переходим в store/reducers и описываем хранилище и поработаем с redux */}
        </li>
      </ul>
    </>
  );
};

export default SideMenu;
