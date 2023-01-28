import { IsNotEmpty, Length } from 'class-validator';

export class CreateLinkBody{
    @IsNotEmpty()
    @Length(5, 191)
    label: string;

    @IsNotEmpty()
    @Length(5, 191)
    url: string;
}