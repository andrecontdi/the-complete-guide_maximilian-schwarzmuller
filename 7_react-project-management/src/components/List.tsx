import { Project } from '../__models__/project.model';
import { Task } from '../__models__/task.model';
import ListItem, { ListItemType } from './ListItem';

type ListType = Project[] | Task[];

interface ListProps {
  list: ListType;
  location: string;
  onOpen?: CallableFunction;
}

const List = ({ list, location, onOpen }: ListProps) => {
  return (
    <ul className="flex flex-col gap-5">
      {list.map((listItem: ListItemType, index: number) => (
        <ListItem
          key={index}
          listItem={listItem}
          location={location}
          onClick={(event) => {
            if (!onOpen) return;

            event.preventDefault();
            onOpen(listItem);
          }}
        />
      ))}
    </ul>
  );
};

export default List;
