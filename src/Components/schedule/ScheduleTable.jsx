import { scheduleData } from "../data/scheduleData";


const ScheduleTable = () => {
return (
<div className="table-container">
<h2>League Schedule</h2>
<table>
<thead>
<tr>
<th>Date / Time</th>
<th>Stadium</th>
<th>Home Team</th>
<th>Score</th>
<th>Away Team</th>
</tr>
</thead>
<tbody>
{scheduleData.map((match, index) => (
<tr key={index}>
<td>{match.date} {match.time}</td>
<td>{match.stadium}</td>
<td>{match.home}</td>
<td>{match.homeScore} : {match.awayScore}</td>
<td>{match.away}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};


export default ScheduleTable;