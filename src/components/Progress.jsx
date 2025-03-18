import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progress = () => {
  return (
    <div className="featured">
        <div className="top">
            <div className="revenue_heading">
            <h1 className="title">Total Revenue</h1>
            </div>
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5} 
                styles={buildStyles({
                    textColor: "#CF79FE",
                    pathColor: "#CF79FE",
                  })}
                  />
            </div>
            </div>
            <div className="bottom">
            <p className="title">Total Profit made today</p>
            <p className="amount">$14,220</p>
            <p className="description">Previous transactions processing. Last payments may not be included.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Today</div>
                    <div className="itemResult positive">
                    <i class="bi bi-caret-up-fill"></i>
                        <div className="resultAmount">$7.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                    <i class="bi bi-caret-down-fill"></i>
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                    <i class="bi bi-caret-up-fill"></i>
                        <div className="resultAmount">$26.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Progress;