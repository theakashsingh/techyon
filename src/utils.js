export const getInitials = name => name.split(" ")[0][0];
export  const getPercentage = (value,total)=>{
    if (total === 0) {
      return 'Total cannot be zero';
    }
    return (value / total) * 100;
  }