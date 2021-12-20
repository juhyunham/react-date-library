import React, { useRef, useState } from "react";
import moment from "moment-timezone";
import "moment/locale/ko";

const MomentExample = (props) => {
    const momentDate = moment();
    const newMomentDate = momentDate.clone().add(1, "week");
    const cloneNewMomentDate = newMomentDate.clone().add(1, "week");

    const birthDayRef = useRef(null);
    const [day, setDay] = useState("");
    const handleBirthDayChange = (event) => {
        setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
    };

    return (
        <div>
            <h1>moment</h1>
            <h2>Immutable Check</h2>
            <div>
                {momentDate.format()}
                <br />
                {newMomentDate.format()}
                <br />
                {cloneNewMomentDate.format()}
            </div>
            <div>
                <h2>뉴욕시간 SummerTime</h2>
                <h3>2020년 12월 25일 13시에 하루 더하기</h3>
                <p>
                    {moment
                        .tz("2020-12-25 13:00:00", "America/New_York")
                        .add(1, "day")
                        .format()}
                </p>
                <h3>2020년 12월 25일 13시에 24시간 더하기</h3>
                <p>
                    {moment
                        .tz("2020-12-25 13:00:00", "America/New_York")
                        .add(24, "hour")
                        .format()}
                </p>
            </div>
            <div>
                <h2>한국어 표기 </h2>
                <h3>2020년 12월 25일 🎉</h3>
                <p>{moment("2020-12-25").format("YYYY년 MM월 DD일")}</p>
            </div>
            <div>
                <h2>내생일이 무슨 요일인지~?</h2>
                <div>
                    <input
                        type="date"
                        ref={birthDayRef}
                        onChange={handleBirthDayChange}
                    />
                    <p>무슨 요일이었을까?</p>
                    <p>{day}</p>
                </div>
            </div>
            <div>
                <h2>두날짜 비교</h2>
                <p>
                    2021년 12월 20일 03:00와 2021년 12월 20일 04:00는 몇시간
                    차이인가?
                </p>
                <p>
                    {`${moment("2021-12-20 03:00").diff(
                        moment("2021-12-21 04:00"),
                        "hours"
                    )}시간`}
                </p>
            </div>
        </div>
    );
};

export default MomentExample;
