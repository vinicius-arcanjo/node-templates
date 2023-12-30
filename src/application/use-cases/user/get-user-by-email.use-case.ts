import { Injectable } from '@nestjs/common';

import { Either, left, right } from '@core/logic/Either';

import { User } from '@domain/entities/user/user.entity';
import { Email } from '@domain/entities/user/email';
import { EmailBadFormattedError } from '@domain/entities/user/errors/email-bad-formatted-error';

import { UsersRepository } from '@infra/database/repositories/users.repository';

import { UserByEmailNotFoundError } from './errors/user-by-email-not-found.error';

type GetUserByEmailResponse = Either<
  EmailBadFormattedError | UserByEmailNotFoundError,
  User
>;

@Injectable()
export class GetUserByEmailUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async handle(email: string): Promise<GetUserByEmailResponse> {
    const isInvalidEmail = !Email.validate(email);

    if (isInvalidEmail) {
      return left(new EmailBadFormattedError(email));
    }

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      return left(new UserByEmailNotFoundError(email));
    }

    return right(user);
  }
}
