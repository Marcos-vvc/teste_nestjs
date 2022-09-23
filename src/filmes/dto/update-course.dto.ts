import { PartialType } from "@nestjs/mapped-types";
import { CriarFilmeDto } from "./criar-fillme.dto";

export class UpdateFilmeDto extends PartialType(CriarFilmeDto) {
 
}
