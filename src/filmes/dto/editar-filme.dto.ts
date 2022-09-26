import { PartialType } from "@nestjs/mapped-types";
import { CriarFilmeDto } from "./criar-fillme.dto";


export class EditarFilmeDto extends PartialType(CriarFilmeDto) {
}
