import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Length, Min, IsUUID } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  clientId: string;
}