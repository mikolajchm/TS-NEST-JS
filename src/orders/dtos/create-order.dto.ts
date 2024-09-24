import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Length, Min, IsUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  clientId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: string;
}