import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IsEmail } from 'class-validator';
import { IsStrongPassword } from 'class-validator/types/decorator/decorators';
import { AgentsService } from './agents.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { Agent } from './entities/agent.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Marketing Agents Service Section')
@Controller('agents')
export class AgentsController {
constructor(
  private readonly agentsService: AgentsService) {}

@Post()
  async createAgent(@Body() agentData: Agent): Promise<Agent> {
    return this.agentsService.createAgent(agentData);
  }

  @Get(':id')
  async getAgentById(@Param('id') id: number): Promise<Agent> {
    return this.agentsService.getAgentById(id);
  }
 
  @Patch(':id')
  async updateAgent(
    @Param('id') id: number,
    @Param('username') Isusername: string,
    @Param('email') IsEmail: string,
    @Param('password') IsStrongPassword: string,
    @Body() agentData: Agent,
  ): Promise<Agent> {
    return this.agentsService.updateAgent(id, agentData);
  }

  @Delete(':id')
  async deleteAgent(@Param('id') id: number): Promise<void> {
    return this.agentsService.deleteAgent(id);
  } 
}
