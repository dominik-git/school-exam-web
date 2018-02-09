import React from "react";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import { StyledList, StyledItem } from "./styles";

const SortableItem = SortableElement(({ value }) => <StyledItem>{value}</StyledItem>);
const SortableList = SortableContainer(({ items }) => (
  <StyledList>
    {items.map((value, index) => <SortableItem key={`item-${index}`} index={index} value={value} />)}
  </StyledList>
));

export default class DragAndDropList extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
    };
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(
      {
        items: arrayMove(this.state.items, oldIndex, newIndex),
      },
      () => {
        console.log(this.state.items);
      },
    );
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} lockAxis="x" axis="x" />;
  }
}
