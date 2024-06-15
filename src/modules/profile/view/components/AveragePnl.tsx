const AveragePnl = ({data}:any) => {
  const totalPnl = data.reduce((sum:any, item:any) => sum + item.pnl, 0);
  const averagePnl = totalPnl / data.length;
  const percentagePnl = (averagePnl).toFixed(2); // Format as percentage

  const pnlStyle = {
    
    color: averagePnl >= 0 ? 'green' : 'red' // Conditional styling
  };

  return (
    <span className="text-[28px]" style={pnlStyle}>{percentagePnl}%</span>
  );
}

export default AveragePnl
