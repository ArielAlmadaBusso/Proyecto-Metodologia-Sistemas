class LikeCommand {
    private readonly ip;
    private readonly nickname;
    private readonly pin: string;
  
    public constructor(ip: string, nickname: string, pin: string) {
        
        this.ip = ip;
        this.nickname = nickname;
        this.pin = pin;
        
    }
    
    public getIp(): string {
        return this.ip;
    }
    public getNickname(): string {
        return this.nickname;
    }
    public getPin(): string {
      return this.pin;
  }
  
  }
  
  export default LikeCommand;
  