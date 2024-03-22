import BreadCrumb from "@/components/common/breadcrumb";
import { KanbanBoard } from "@/components/app/kanban/kanban-board";
import NewTaskDialog from "@/components/app/kanban/new-task-dialog";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [{ title: "Kanban", link: "/dashboard/kanban" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading title={`Kanban`} description="Manage tasks by dnd" />
          <NewTaskDialog />
        </div>
        <KanbanBoard />
      </div>
    </>
  );
}
