import DisLike from '../../domain/entities/disLike';

class CreatedisLikeCommand {

    
    private readonly ip;
    private readonly nickname;

    public constructor(ip: string, nickname: string) {
        
        this.ip = ip;
        this.nickname = nickname;
    }
    
    public getIp(): string {
        return this.ip;
    }
    public getNickname(): string {
        return this.nickname;
    }
}
export default CreatedisLikeCommand;