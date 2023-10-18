import like from '../../domain/entities/like';
import likeCommand from '../../application/commands/like/likeCommand';

class LikeHandler {
    public async execute(command: likeCommand) {
        const { id, owner, pin } = command;
        const like = like.create(ip, nickname);

        return like;
    }
}

export default new LikeHandler();
