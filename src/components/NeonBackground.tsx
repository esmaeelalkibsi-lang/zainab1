export default function NeonBackground() {
  return (
    <>
      <div className="bg-grid" />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1B3A5F]/4 blur-[120px] rounded-full animate-pulse-soft" />
        <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-[#B86B38]/3 blur-[140px] rounded-full animate-pulse-soft" />
        <div className="absolute bottom-0 left-[10%] w-[500px] h-[300px] bg-[#2A5380]/3 blur-[130px] rounded-full animate-pulse-soft" />
      </div>
    </>
  )
}
