import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Length, Min, IsUUID } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @Length(3, 20)
  client: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}