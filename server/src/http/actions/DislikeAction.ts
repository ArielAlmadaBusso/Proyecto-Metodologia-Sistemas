import Dislike from '../../domain/entities/dislike';
import DislikeRepository from '../../infrastructure/repositories/dislike_repository';

class DislikeAction {
    private dislikeRepository: DislikeRepository;

    public constructor(dislikeRepository: DislikeRepository) {
        this.dislikeRepository = dislikeRepository;
    }

    public async execute(): Promise<Dislike[]> {
        try {
            const dislikes = await this.dislikeRepository.getAll();
            return dislikes;
        } catch (error) {
            throw new Error('No se pudieron obtener las categorías');
        }
    }
}

export default DislikeAction;