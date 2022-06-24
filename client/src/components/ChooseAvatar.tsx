import React, { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import useGenerateRandomAvatar from "../hooks/useGenerateRandomAvatar";
import ChooseAvatarButton from "./ChooseAvatarButton";

const ChooseAvatar = ({
  setAvatar,
}: {
  setAvatar: (avatar_url: string) => void;
}) => {
  const generateRandomAvatar = useGenerateRandomAvatar();
  const handleAvatarClick = (event: any) => {
    const idx = parseInt(event.target.id);
    if (idx >= 0 && idx < 8) setSelectedIdx(idx);
  };
  const [avatars, setAvatats] = useState(["", "", "", "", "", "", "", ""]);
  const refreshAvatars = () => {
    loadAvatars();
  };
  const loadAvatars = () => {
    const newAvatars = ["", "", "", "", "", "", "", ""];
    for (let i = 0; i < 8; i++) {
      newAvatars[i] = generateRandomAvatar();
    }
    setAvatats([...newAvatars]);
  };
  useEffect(() => {
    loadAvatars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    setAvatar(avatars[selectedIdx]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIdx, avatars]);

  return (
    <div className="flex flex-col items-start px-4 my-6">
      <label className="font-medium">Choose an Avatar</label>
      <div className="w-full flex items-center mt-2">
        <img
          src={avatars[selectedIdx]}
          alt="AVATAR"
          className="h-36 rounded-full my-1"
        />
        <span className="h-24 mr-0 ml-2 w-[1px] border border-r-0 border-gray-300/30" />
        <div className="w-full flex flex-wrap justify-center">
          {avatars.map((avatar, i) => {
            return (
              <ChooseAvatarButton
                key={i.toString()}
                avatar={avatar}
                idx={i}
                selectedIdx={selectedIdx}
                handleAvatarClick={handleAvatarClick}
              />
            );
          })}
        </div>
      </div>
      <button
        onClick={refreshAvatars}
        className="flex items-center my-2 rounded-full bg-gray-500/30 border border-gray-500 px-2 py-1 text-sm"
      >
        <BiRefresh className="text-xl mr-1" />
        Refresh Avatars
      </button>
    </div>
  );
};

export default ChooseAvatar;
