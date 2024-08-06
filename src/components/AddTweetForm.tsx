import React, { useState } from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import CircularProgress from "@mui/material/CircularProgress";
import ModalBlock from "./ModalBlock";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import {
  RiGalleryLine,
  HiOutlineEmojiHappy,
  MdOutlineGifBox,
  RiCalendarScheduleLine,
  GiWorld,
  GoPlus,
} from "../data/data";

const MAX_LENGTH = 279; // 17 из-за того что state полностью обновляет наш компонент AddTweetForm, мы выносим MAX_LENGTH = 280 отдельно в не компонента

const AddTweetForm = () => {
  const [text, setText] = useState<string>(""); // 9 - это хук состояния React, который инициализирует переменную text со значением пустой строки и функцию setText для обновления этого состояния. Тип состояния указан как string.
  const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false);


  const textLimetPercent = Math.round((text.length / 280) * 100); // 13 - это переменная, которая рассчитывает процентное значение длины текста в сравнении с максимальной длиной 280 символов. Если длина текста равна 280 символам, то textLimetPercent будет равен 100.

  const textCount = MAX_LENGTH - text.length; // 18 textCount передаем наш MAX_LENGTH и вычитываем его.

  const handleChangeTextare = (e: React.FormEvent<HTMLTextAreaElement>) => {
    // 10 - это функция-обработчик события, которая будет вызвана при изменении текста в textarea. Она принимает событие e как аргумент, которое содержит информацию о текущем состоянии textarea.
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    // 19 после отправки твита он будет очишать инпут.
    setText("");
  };

  // 20 Перехожим в компонент SideMenu.tsx

  const handleClickOpenAddTweet = () => {
    setVisibleAddTweet(true);
  };

  const onCloseAddTweet = () => {
    setVisibleAddTweet(false);
  };

  return (
    <div>
      <Grid className="p-3" container spacing={3}>
        <Grid item xs={1}>
          <Avatar
            alt={`Аватарка пользователя`}
            src="https://avatars.githubusercontent.com/u/96543124?v=4"
          />
        </Grid>
        <Grid item xs={11}>
          <TextareaAutosize
            style={{ fontSize: "20px" }}
            className="max-h-[90vh] mt-1 overflow-auto mb-1.5 placeholder:text-[#7e8185] placeholder:font-[400] placeholder:text-[20px] w-[100%] bg-black outline-none resize-none text-white"
            aria-label="empty textarea"
            placeholder="What is happening?!"
            maxRows={20}
            onChange={handleChangeTextare} // 11 handleChangeTextare переносим сюда в onChange.
            value={text} // 12 у тут передаем наш text и у нас контралируемое поле.
          />
          <div className="flex gap-1 hover:bg-[#031018] mb-2.5 ml-[-0.5rem] w-fit active:bg-[#061F30] text-[14px] font-bold p-1 px-3 items-center rounded-full transition-all text-[#1D9BF0]">
            <GiWorld />
            <button>Everyone can reply</button>
          </div>

          <div className="h-[1px] bg-[#2F3336] mb-1.5 w-[100%]"></div>
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer justify-center items-center gap-4">
              <RiGalleryLine
                className="hover:bg-[#031018] active:bg-[#061F30] ml-[-0.5rem] w-[40px] h-[40px] p-2.5 items-center rounded-full transition-all text-[#1D9BF0]"
                size={20}
              />
              <HiOutlineEmojiHappy
                className="hover:bg-[#031018] active:bg-[#061F30] ml-[-1rem] w-[42px] h-[42px] p-2.5 items-center rounded-full transition-all text-[#1D9BF0]"
                size={23}
              />
              <MdOutlineGifBox
                className="hover:bg-[#031018] active:bg-[#061F30] ml-[-1rem] w-[42px] h-[42px] p-2.5 items-center rounded-full transition-all text-[#1D9BF0]"
                size={23}
              />
              <RiCalendarScheduleLine
                className="hover:bg-[#031018] active:bg-[#061F30] ml-[-1rem] w-[40px] h-[40px] p-2.5 items-center rounded-full transition-all text-[#1D9BF0]"
                size={20}
              />
            </div>
            <div className="flex justify-center items-center">
              {text && ( // 15  CircularProgress будет отображаться только тогда, когда мы в text что-то запишем.
                <div className="flex gap-2 justify-center items-center">
                  <p className="text-[#EC222E] text-[14px]">
                    {textLimetPercent >= 100 ? textCount : undefined}
                  </p>
                  <div style={text.length >= 290 ? { display: "none" } : {}}>
                    <CircularProgress
                      variant="determinate"
                      value={text.length >= MAX_LENGTH ? 100 : textLimetPercent} // 14 textLimetPercent передаем в наш CircularProgress.
                      style={
                        text.length >= MAX_LENGTH
                          ? {
                              color: "#EC222E",
                              width: "32px",
                              transition: "0.3s",
                              height: "32px",
                            }
                          : {
                              width: "25px",
                              height: "25px",
                              transition: "0.3s",
                            }
                      }
                    />
                  </div>
                  <div className="w-[1px] bg-[#3E4144] h-[2rem]"></div>
                  <div onClick={handleClickOpenAddTweet} className="p-1 border-[#686d72] border rounded-full ">
                    <GoPlus className="cursor-pointer" color="#1D9BF0" />
                  </div>
                </div>
              )}
              <button
                onClick={handleClickAddTweet} // 20 Передаем нашу функцию handleClickAddTweet
                disabled={textLimetPercent >= 100} // 16 если ты больше 280 символом написал, то ты не будешь дальше отправлять твит
                style={
                  textLimetPercent >= 100
                    ? { background: "#0F4E78", color: "#808080" }
                    : undefined
                }
                className="bg-[#1D9BF0] transition-all mx-2 hover:bg-[#1d9cf0f3] font-bold text-[14px] p-2 px-5 rounded-full"
              >
                Post
              </button>

              <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
                <AddTweetForm />
              </ModalBlock>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddTweetForm;
