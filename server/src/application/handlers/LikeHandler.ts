import Like from '../../domain/entities/like';
import LikeCommand from '../commands/LikeCommand';

class LikeHandler {
    public async execute(command: LikeCommand) {
        const { ip, nickname } = command;
        const like = Like.create(ip, nickname);

        return like;
    }
}

export default new LikeHandler();
