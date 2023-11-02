import {VisitorRepository} from "../../../../src/infrastructure/repositories/visitor_repository";
import {ClaimRepository} from "../../../../src/infrastructure/repositories/claim_respository";
import {ClaimMother} from "../../../shared/mothers/ClaimMother";
import {LikeHandler} from "../../../../src/application/handlers/LikeHandler";
import LikeCommand from "../../../../src/application/commands/likeCommand";
import Visitor from "../../../../src/domain/entities/visitor";
import Category from "../../../../src/domain/entities/category";
import Claim from "../../../../src/domain/entities/claim";

describe('unit - like handler tests', () => {

  let sut: LikeHandler;

  let mockVisitorRepository: VisitorRepository;
  let mockClaimRepository: ClaimRepository;

  beforeEach(() => {
    mockVisitorRepository = new VisitorRepository()
    mockClaimRepository = new ClaimRepository();

    sut = new LikeHandler(
      mockClaimRepository,
      mockVisitorRepository,
    );
  });

  test('should like a claim', async () => {
    // arrange
    const visitor = Visitor.create(
      '127.0.0.1',
      'pepito perez',
      '123456',
    );

    await mockVisitorRepository.save(visitor);

    const category = Category.create(
      'category',
      'rojo'
    );

    const claim = ClaimMother.withoutLikes(visitor, category)

    await mockClaimRepository.save(claim)

    const command = new LikeCommand(
      claim.getId(),
      visitor.getId(),
      '123456',
    );

    // act
    await sut.execute(command);


    //asserts
    expect(claim.hasVisitorLiked(visitor.getId())).toBeTruthy()
  });

  test('should fail when visitor already liked', async () => {
    // arrange
    const visitor = Visitor.create(
      '127.0.0.1',
      'pepito perez',
      '123456',
    );

    await mockVisitorRepository.save(visitor);

    const category = Category.create(
      'category',
      'rojo'
    );

    const claim = ClaimMother.withLikes(visitor, category, [visitor.getId()]);

    await mockClaimRepository.save(claim)

    const command = new LikeCommand(
      claim.getId(),
      visitor.getId(),
      '123456',
    );

    // act
    await expect(sut.execute(command)).rejects.toThrowError('Visitor has already liked this claim.');
  });

  test('should fail when visitor pin does not match', async () => {
    // arrange
    const visitor = Visitor.create(
      '127.0.0.1',
      'pepito perez',
      '123456',
    );

    await mockVisitorRepository.save(visitor);

    const category = Category.create(
      'category',
      'rojo'
    );

    const claim = Claim.create(
      visitor,
      'un test',
      'description',
      category,
      'location'
    );

    await mockClaimRepository.save(claim)

    const command = new LikeCommand(
      claim.getId(),
      visitor.getId(),
      '123458',
    );

    // act
    await expect(sut.execute(command)).rejects.toThrowError('visitor pin does not match');
  });
})