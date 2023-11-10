class LikeCommand {

   public constructor(
    private claimId: string,
    private visitorId: string,
    private pin: string
  ) {

  }

  public getClaimId(): string {
    return this.claimId;
  }

  public getVisitorId(): string {
    return this.visitorId;
  }

  getPin() {
    return this.pin;

  }
}
  
  export default LikeCommand;
