import { IconSharePost } from "@/assets/icons";

const AveragePnl = ({data}:any) => {
  const totalPnl = data.reduce((sum:any, item:any) => sum + item.pnl, 0);
  const averagePnl = totalPnl / data.length;
  const percentagePnl = (averagePnl).toFixed(2); // Format as percentage

  const pnlStyle = {
    
    color: averagePnl === 0 ? 'gray' : averagePnl >= 0 ? 'green' : 'red' // Conditional styling
  };

  return (
    <>
      <IconSharePost color={averagePnl === 0 ? '#A6A6A6' : averagePnl >= 0 ? "#6BDF61" : "#FF0000" } />
      <span className="text-[18px]" style={pnlStyle}>{percentagePnl}%</span>
    </>
  );
}

export default AveragePnl
