import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const MineralSection = props => {
  return (
    <div>
      <div>
        <span>{props.title}</span>
        <span>Buy price</span>
        <input type="text"></input>
        <span>Sell price</span>
        <input type="text"></input>
      </div>
    </div>
  );
};

export default MineralSection;
