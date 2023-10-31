import disLike from '../../domain/entities/disLike';
import disLikeCommand from '../commands/disLikeCommand';

class disLikeHandler {
    public async execute(command: disLikeCommand) {
        const { ip, nickname } = command;
        const dislike = disLike.create(ip, nickname);

        return dislike;
    }
}

export default new disLikeHandler();