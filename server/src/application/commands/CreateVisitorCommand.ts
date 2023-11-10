class CreateVisitorCommands{

    private readonly id: string;
    private readonly ip: string;
    private readonly nickname: string;
    private readonly pin: string;

    public constructor(id: string, ip: string, nickname:string, pin: string) {
        this.id = id;
        this.ip = ip;
        this.nickname = nickname;
        this.pin = pin;
    }
    public getId(): string {
        return this.id;
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
export default CreateVisitorCommands;