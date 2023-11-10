class LikeCommand {

   public constructor(
    private claimId: string,
    private nickname: string,
    private pin: string
  ) {

  }

  public getClaimId(): string {
    return this.claimId;
  }

  public getNickname(): string {
    return this.nickname;
  }

  getPin() {
    return this.pin;

  }
  
  export default LikeCommand;
  
