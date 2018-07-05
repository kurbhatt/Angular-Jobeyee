import { PipeTransform, Pipe } from "@angular/core";
import { User } from "./user";

@Pipe({
    name: "filter"
})
export class UserFilterPipe implements PipeTransform{

    transform(value: User[], filterBy: string): User[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((user: User) =>
    user.name.toLocaleLowerCase().indexOf(filterBy) !== -1): value;
    }
}