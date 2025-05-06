export default function ScrollBar(){

    const cards = [
        "https://framerusercontent.com/images/XIz7h3ykQfHdKPLeNHmV68fDIIU.png",
        "https://framerusercontent.com/images/YQI2Rt3DHaV8GgQhQchEv78sNCU.png",
        "https://framerusercontent.com/images/lFo1r20nxsfzTjkEw1KRiiQnLc.png",
        "https://framerusercontent.com/images/8iWuqBIdC38u7mEGPUvZZ7usu4.png",
        "https://framerusercontent.com/images/x8cejpNv1oPYGgqq3PKRDhweWI.png"
    ]
    return  <div className="max-w-full overflow-x-auto pb-4">
    <div className="flex gap-4 w-max px-4">
      {cards.map((url, idx) => (
        <div
          key={idx}
          className={`min-w-[250px] max-w-[350px] rounded-2xl p-4 text-white relative`}
        >
         <img src={url} alt="" />
        </div>
      ))}
    </div>
  </div>
}